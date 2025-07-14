'use client';

interface Company {
  name: string;
  price: string;
  change: string;
}

interface CompanyPricesProps {
  companies: Company[];
}

export default function CompanyPrices({ companies }: CompanyPricesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {companies.map((company, index) => (
        <div
          key={index}
          className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white font-semibold text-lg">{company.name}</h3>
              <p className="text-gray-400 text-sm">Stock Price</p>
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-xl">{company.price}</p>
              <p className={`text-sm font-semibold ${
                company.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {company.change}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}