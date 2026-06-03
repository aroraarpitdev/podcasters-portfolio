"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type DashboardContextType = {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  updateSectionField: (section: string, field: string, value: any) => void;
  updateArrayItem: (section: string, arrayField: string, index: number, field: string, value: any) => void;
  addArrayItem: (section: string, arrayField: string, defaultItem: any) => void;
  removeArrayItem: (section: string, arrayField: string, index: number) => void;
  updateTopLevelArrayItem: (arrayField: string, index: number, field: string, value: any) => void;
  addTopLevelArrayItem: (arrayField: string, defaultItem: any) => void;
  removeTopLevelArrayItem: (arrayField: string, index: number) => void;
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({
  children,
  initialData,
}: {
  children: ReactNode;
  initialData: any;
}) {
  const [data, setData] = useState(initialData);

  const updateSectionField = (section: string, field: string, value: any) => {
    setData((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const updateArrayItem = (section: string, arrayField: string, index: number, field: string, value: any) => {
    setData((prev: any) => {
      const newArray = [...(prev[section]?.[arrayField] || [])];
      if (newArray[index]) {
        newArray[index] = { ...newArray[index], [field]: value };
      }
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [arrayField]: newArray,
        },
      };
    });
  };

  const addArrayItem = (section: string, arrayField: string, defaultItem: any) => {
    setData((prev: any) => {
      const newArray = [defaultItem, ...(prev[section]?.[arrayField] || [])];
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [arrayField]: newArray,
        },
      };
    });
  };

  const removeArrayItem = (section: string, arrayField: string, index: number) => {
    setData((prev: any) => {
      const newArray = (prev[section]?.[arrayField] || []).filter((_: any, i: number) => i !== index);
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [arrayField]: newArray,
        },
      };
    });
  };

  const updateTopLevelArrayItem = (arrayField: string, index: number, field: string, value: any) => {
    setData((prev: any) => {
      const newArray = [...(prev[arrayField] || [])];
      if (newArray[index]) {
        newArray[index] = { ...newArray[index], [field]: value };
      }
      return {
        ...prev,
        [arrayField]: newArray,
      };
    });
  };

  const addTopLevelArrayItem = (arrayField: string, defaultItem: any) => {
    setData((prev: any) => {
      const newArray = [defaultItem, ...(prev[arrayField] || [])];
      return {
        ...prev,
        [arrayField]: newArray,
      };
    });
  };

  const removeTopLevelArrayItem = (arrayField: string, index: number) => {
    setData((prev: any) => {
      const newArray = (prev[arrayField] || []).filter((_: any, i: number) => i !== index);
      return {
        ...prev,
        [arrayField]: newArray,
      };
    });
  };

  return (
    <DashboardContext.Provider
      value={{
        data,
        setData,
        updateSectionField,
        updateArrayItem,
        addArrayItem,
        removeArrayItem,
        updateTopLevelArrayItem,
        addTopLevelArrayItem,
        removeTopLevelArrayItem,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboardContext must be used within a DashboardProvider");
  }
  return context;
}
