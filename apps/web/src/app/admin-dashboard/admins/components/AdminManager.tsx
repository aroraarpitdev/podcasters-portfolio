'use client';

import React, { useState, useEffect } from 'react';
import { createUserAction, deleteUserAction, getUsersAction, updateUserAction } from '@/app/actions/users';

interface User {
  id: string;
  username: string;
  failedLoginAttempts: number;
  lockedUntil: string | null;
  createdAt: string;
}

export default function AdminManager() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  // Form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [unlock, setUnlock] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setIsLoading(true);
    const data = await getUsersAction();
    setUsers(data);
    setIsLoading(false);
  };

  const openModal = (user?: User) => {
    if (user) {
      setEditingUserId(user.id);
      setUsername(user.username);
      setPassword('');
      setUnlock(false);
    } else {
      setEditingUserId(null);
      setUsername('');
      setPassword('');
      setUnlock(false);
    }
    setFormError('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingUserId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    try {
      let res;
      if (editingUserId) {
        res = await updateUserAction(editingUserId, { username, password: password || undefined, unlock });
      } else {
        if (!password) {
          setFormError('Password is required for new users');
          setIsSubmitting(false);
          return;
        }
        res = await createUserAction({ username, password });
      }

      if (res && res.success) {
        closeModal();
        await loadUsers();
      } else {
        setFormError(res?.message || 'An error occurred while saving.');
      }
    } catch (err) {
      console.error(err);
      setFormError('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string, currentUsername: string) => {
    if (currentUsername === 'admin') {
      alert("You cannot delete the primary 'admin' account.");
      return;
    }
    if (confirm(`Are you sure you want to delete ${currentUsername}? This cannot be undone.`)) {
      const res = await deleteUserAction(id);
      if (res.success) {
        loadUsers();
      } else {
        alert(res.message || 'Failed to delete user');
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
        <div>
          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">Registered Administrators</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage all accounts that have access to this dashboard.</p>
        </div>
        <button
          onClick={() => openModal()}
          className="bg-primary hover:bg-primary-container active:scale-[0.98] text-on-primary-container font-button text-button h-[40px] px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(245,166,35,0.2)]"
        >
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          Add Admin
        </button>
      </div>

      <div className="bg-surface-container border border-outline-variant rounded-2xl overflow-hidden">
        {isLoading ? (
          <div className="p-12 flex justify-center">
            <svg className="animate-spin h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
            </svg>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high border-b border-outline-variant">
                  <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Username</th>
                  <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {users.map((user) => {
                  const isLocked = user.lockedUntil && new Date(user.lockedUntil) > new Date();

                  return (
                    <tr key={user.id} className="hover:bg-surface-container-high/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant">
                            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">person</span>
                          </div>
                          <div>
                            <div className="font-body-lg text-body-lg text-on-surface font-medium">{user.username}</div>
                            <div className="font-body-md text-[12px] text-on-surface-variant">Joined {new Date(user.createdAt).toLocaleDateString()}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {isLocked ? (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-label-caps text-[11px] font-bold tracking-wider">
                            <span className="material-symbols-outlined text-[14px]">lock</span>
                            LOCKED
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-label-caps text-[11px] font-bold tracking-wider">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span>
                            ACTIVE
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openModal(user)}
                            className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors"
                            title="Edit User"
                          >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(user.id, user.username)}
                            disabled={user.username === 'admin'}
                            className="p-2 rounded-lg text-on-surface-variant hover:text-red-400 hover:bg-red-400/10 transition-colors disabled:opacity-30 disabled:hover:text-on-surface-variant disabled:hover:bg-transparent"
                            title={user.username === 'admin' ? "Cannot delete primary admin" : "Delete User"}
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container border border-outline-variant rounded-2xl p-6 w-full max-w-md shadow-2xl relative animate-[fadeIn_0.2s_ease-out]">
            <button onClick={closeModal} className="absolute right-4 top-4 text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-6">
              {editingUserId ? 'Edit Administrator' : 'Add New Administrator'}
            </h3>

            {formError && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-2">
                <span className="material-symbols-outlined text-red-400 text-[18px]">error</span>
                <p className="font-body-md text-[13px] text-red-400 mt-0.5">{formError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-label-caps text-[11px] font-bold text-on-surface uppercase tracking-wider mb-2">Username</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant focus:border-primary text-on-surface placeholder:text-on-surface-variant rounded-lg px-4 py-2.5 font-input text-[14px] outline-none transition-colors"
                  placeholder="e.g. editor"
                />
              </div>

              <div>
                <label className="block font-label-caps text-[11px] font-bold text-on-surface uppercase tracking-wider mb-2">
                  {editingUserId ? 'New Password (leave blank to keep current)' : 'Password'}
                </label>
                <input
                  type={editingUserId ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant focus:border-primary text-on-surface placeholder:text-on-surface-variant rounded-lg px-4 py-2.5 font-input text-[14px] outline-none transition-colors"
                  placeholder={editingUserId ? "••••••••" : "e.g. securepassword123"}
                />
              </div>

              {editingUserId && (
                <label className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant bg-surface-dim cursor-pointer group hover:border-primary/50 transition-colors mt-2">
                  <input
                    type="checkbox"
                    checked={unlock}
                    onChange={(e) => setUnlock(e.target.checked)}
                    className="w-4 h-4 rounded bg-surface-container border-outline-variant text-primary focus:ring-primary focus:ring-offset-surface-dim"
                  />
                  <span className="font-body-md text-[14px] text-on-surface group-hover:text-primary transition-colors">Reset failed login attempts & unlock account</span>
                </label>
              )}

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 font-button text-[14px] font-medium text-on-surface hover:bg-surface-container-high py-2.5 rounded-lg border border-outline-variant transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 font-button text-[14px] font-medium text-on-primary-container bg-primary hover:bg-primary-container py-2.5 rounded-lg transition-colors flex justify-center items-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
                    </svg>
                  ) : 'Save Admin'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />
    </div>
  );
}
