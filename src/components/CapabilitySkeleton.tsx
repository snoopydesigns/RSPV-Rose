import React from 'react';

interface CapabilityCardSkeletonProps {
  isReversed?: boolean;
}

export const CapabilityCardSkeleton: React.FC<CapabilityCardSkeletonProps> = ({ isReversed = false }) => {
  return (
    <div className="bg-white border border-[#D9D4CC] p-8 sm:p-12 shadow-sm animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Visual Column Skeleton */}
        <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="border border-stone-200 aspect-[4/3] shimmer-element w-full" />
        </div>

        {/* Details Column Skeleton */}
        <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
          {/* Top Tag & Number */}
          <div className="flex items-center gap-3">
            <div className="w-28 h-6 shimmer-element" />
            <div className="w-36 h-4 shimmer-element" />
          </div>

          {/* Title */}
          <div className="w-4/5 h-9 shimmer-element" />

          {/* Description Paragraph */}
          <div className="space-y-2 pt-1">
            <div className="w-full h-3.5 shimmer-element" />
            <div className="w-11/12 h-3.5 shimmer-element" />
            <div className="w-3/4 h-3.5 shimmer-element" />
          </div>

          {/* Compliance Box */}
          <div className="bg-[#FAF8F5] p-3.5 border-l-2 border-[#A65D67]/40 space-y-2">
            <div className="w-44 h-3.5 shimmer-element" />
            <div className="w-full h-3 shimmer-element" />
          </div>

          {/* Activities List */}
          <div className="space-y-2 pt-2">
            <div className="w-36 h-3 shimmer-element" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                <div className="w-full h-3 shimmer-element" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                <div className="w-5/6 h-3 shimmer-element" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                <div className="w-4/5 h-3 shimmer-element" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                <div className="w-11/12 h-3 shimmer-element" />
              </div>
            </div>
          </div>

          {/* Applicable Markets */}
          <div className="space-y-2 pt-2 border-t border-stone-200">
            <div className="w-40 h-3 shimmer-element" />
            <div className="space-y-1.5">
              <div className="w-3/4 h-3 shimmer-element" />
              <div className="w-2/3 h-3 shimmer-element" />
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-3">
            <div className="w-44 h-9 shimmer-element" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const NaicsTableSkeleton: React.FC = () => {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="w-32 h-3 shimmer-element" />
          <div className="w-64 h-8 shimmer-element" />
          <div className="w-96 h-3.5 shimmer-element" />
        </div>
        <div className="w-56 h-10 shimmer-element" />
      </div>

      <div className="overflow-x-auto border border-stone-200 bg-[#FAF8F5]">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#30202D] text-white font-mono text-[11px]">
            <tr>
              <th className="py-3 px-4 uppercase tracking-wider">Classification</th>
              <th className="py-3 px-4 uppercase tracking-wider">NAICS Code</th>
              <th className="py-3 px-4 uppercase tracking-wider">Official Title Description</th>
              <th className="py-3 px-4 text-right uppercase tracking-wider">Copy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <tr key={i} className="hover:bg-stone-50">
                <td className="py-3.5 px-4">
                  <div className="w-24 h-4 shimmer-element" />
                </td>
                <td className="py-3.5 px-4 font-mono">
                  <div className="w-16 h-4 shimmer-element" />
                </td>
                <td className="py-3.5 px-4">
                  <div className="w-3/4 h-4 shimmer-element" />
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="w-6 h-6 shimmer-element ml-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const CapabilitiesPageSkeleton: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 3 Alternating Capability Cards Skeletons */}
      <CapabilityCardSkeleton isReversed={false} />
      <CapabilityCardSkeleton isReversed={true} />
      <CapabilityCardSkeleton isReversed={false} />
    </div>
  );
};
