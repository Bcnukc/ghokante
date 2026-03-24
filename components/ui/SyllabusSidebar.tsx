// components/ui/SyllabusSidebar.tsx
interface SyllabusSidebarProps {
  subjectName: string;
  description: string;
}

export default function SyllabusSidebar({
  subjectName,
  description,
}: SyllabusSidebarProps) {
  return (
    <div className="bg-surface-container-low p-8 rounded-3xl space-y-4">
      <h3 className="text-lg font-headline font-bold text-on-surface">
        Official Syllabus
      </h3>
      <p className="text-sm text-on-surface-variant font-body">{description}</p>
      <button className="w-full bg-tertiary text-on-tertiary px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-bold hover:opacity-90 transition-all shadow-sm cursor-pointer">
        <span className="material-symbols-outlined">download</span>
        Download Syllabus PDF
      </button>
    </div>
  );
}
