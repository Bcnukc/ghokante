// components/ui/BookList.tsx
import type { Book } from "@/types";

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-headline font-bold text-on-surface px-2">
        Recommended Reading
      </h3>
      <div className="space-y-4">
        {books.map((book) => (
          <div
            key={book.title}
            className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/10"
          >
            {/* Book icon placeholder */}
            <div className="w-16 h-20 bg-slate-200 rounded-lg flex-shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-slate-400">
                menu_book
              </span>
            </div>

            {/* Book info */}
            <div>
              <h4 className="font-headline font-bold text-on-surface leading-tight">
                {book.title}
              </h4>
              <p className="text-xs text-on-surface-variant font-label">
                {book.author}
              </p>
              {book.badge && (
                <span className="text-[10px] bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded mt-2 inline-block font-bold">
                  {book.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
