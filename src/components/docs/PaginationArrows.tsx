import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, ArrowLeft02Icon } from "@hugeicons/core-free-icons";

const PaginationArrows = ({
  currentPage,
  totalItems,
  onChange,
}: PaginationArrowsProps) => {
  function handleNext() {
    if (currentPage < totalItems - 1) {
      onChange(currentPage + 1);
    }
  }

  function handlePrevious() {
    if (currentPage > 0) {
      onChange(currentPage - 1);
    }
  }

  return (
    <div className="flex items-center justify-center border-kiwi-border-nav pl-1">
      <button
        className="flex cursor-pointer items-center rounded-md border border-transparent p-0.5 transition-colors hover:border-kiwi-border hover:bg-kiwi-nav-active"
        onClick={handlePrevious}
        aria-label="Go to previous component"
      >
        <HugeiconsIcon icon={ArrowLeft02Icon} size={16}></HugeiconsIcon>
      </button>
      <button
        className="flex cursor-pointer items-center rounded-md border border-transparent p-0.5 transition-colors hover:border-kiwi-border hover:bg-kiwi-nav-active"
        onClick={handleNext}
        aria-label="Go to next component"
      >
        <HugeiconsIcon icon={ArrowRight02Icon} size={16}></HugeiconsIcon>
      </button>
    </div>
  );
};

type PaginationArrowsProps = {
  currentPage: number;
  totalItems: number;
  onChange: (page: number) => void;
};

export default PaginationArrows;