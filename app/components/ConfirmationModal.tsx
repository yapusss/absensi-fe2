"use client";

import { Modal } from "./Modal";

type ConfirmationModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "blue" | "green" | "rose";
};

export function ConfirmationModal({
  open,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = "Ya, Simpan",
  cancelLabel = "Batal",
  variant = "blue",
}: ConfirmationModalProps) {
  const variantClasses = {
    blue: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-100",
    green: "bg-green-500 hover:bg-green-600 focus:ring-green-100",
    rose: "bg-rose-500 hover:bg-rose-600 focus:ring-rose-100",
  };

  return (
    <Modal open={open} onClose={onClose} title={title} size="sm">
      <div className="space-y-6">
        <p className="text-sm text-slate-600">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition focus:ring-2 ${variantClasses[variant]}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </Modal>
  );
}
