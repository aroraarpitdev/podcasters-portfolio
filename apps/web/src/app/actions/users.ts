'use server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function getUsersAction() {
  try {
    const res = await fetch(`${API_BASE_URL}/users`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch users');
    return await res.json();
  } catch (error) {
    console.error('getUsersAction error:', error);
    return [];
  }
}

export async function createUserAction(data: any) {
  try {
    const res = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const errorData = await res.json();
      return { success: false, message: errorData.message || 'Failed to create user' };
    }
    return { success: true, data: await res.json() };
  } catch (error) {
    console.error('createUserAction error:', error);
    return { success: false, message: 'Server error' };
  }
}

export async function updateUserAction(id: string, data: any) {
  try {
    const res = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const errorData = await res.json();
      return { success: false, message: errorData.message || 'Failed to update user' };
    }
    return { success: true, data: await res.json() };
  } catch (error) {
    console.error('updateUserAction error:', error);
    return { success: false, message: 'Server error' };
  }
}

export async function deleteUserAction(id: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      const errorData = await res.json();
      return { success: false, message: errorData.message || 'Failed to delete user' };
    }
    return { success: true };
  } catch (error) {
    console.error('deleteUserAction error:', error);
    return { success: false, message: 'Server error' };
  }
}
