import Filter from "@/components/Bar/Filter";

export default function BoutiqueLayout({ children }) {

  return (
    <div className="flex">
      <div className='w-1/5 px-5 py-3 bg-gray-50'>
        <Filter />
      </div>
      <div className='w-4/5 px-5 py-4 bg-white'>
        {children}
      </div>
    </div>
  );
}
