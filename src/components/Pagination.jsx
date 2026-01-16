import { ChevronLeft, ChevronRight } from "lucide-react";


const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  isFirst,
  isLast,
  pageSize,
  onPageSizeChange,
  isLoading
}) => {
  if (totalPages <= 1) return null;
  
  const getPageNumbers = () => {
    const maxVisible = 5;
    
    // Calculate start position to center the current page
    let start = Math.max(0, currentPage - 2);
    const end = Math.min(totalPages, start + maxVisible);

    // Adjust start if we hit the end (to keep 5 items visible)
    if (end - start < maxVisible) {
      start = Math.max(0, end - maxVisible);
    }

    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 p-2">
      <div className="flex items-center gap-2 order-2 md:order-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirst || isLoading}
          className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-gray-800 transition-colors cursor-pointer"
          aria-label="Previous Page"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-1">
          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded-md text-sm font-medium transition-colors cursor-pointer
                ${
                  page === currentPage
                    ? "bg-primary text-white dark:text-black/80"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              disabled={isLoading}
            >
              {page + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLast || isLoading}
          className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-gray-800 transition-colors cursor-pointer"
          aria-label="Next Page"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500 order-1 md:order-2 w-full md:w-auto justify-between md:justify-end">
        <span className="text-center">
          Página {currentPage + 1} de {totalPages}
        </span>
        
        <div className="flex items-center gap-2">
          <span>Filas por página:</span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            disabled={isLoading}
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
