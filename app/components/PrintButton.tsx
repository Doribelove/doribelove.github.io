'use client';

import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button
      className="button primary"
      type="button"
      onClick={() => window.print()}
    >
      <Printer size={16} aria-hidden="true" />
      打印 / 保存 PDF
    </button>
  );
}
