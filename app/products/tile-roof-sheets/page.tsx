import Link from "next/link";

export default function PolycarbonateAwningPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-20">
      
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[250px] w-full flex items-center justify-center bg-[#0a3b2c]">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
          Polycarbonate Awning
        </h1>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-[#0a3b2c] transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-[#0a3b2c] transition-colors">Products</Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-[#0a3b2c]">Polycarbonate Awning</span>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 mt-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center border-t-4 border-[#f48c42]">
          <h2 className="text-3xl font-bold text-[#0a3b2c] mb-6">
            Premium Polycarbonate Awning
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Welcome to the dedicated page for our Polycarbonate Awning. We provide top-quality roofing solutions designed for durability and excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-[#f48c42] hover:bg-[#d97736] text-white px-8 py-3 rounded-md font-bold transition-all shadow-md">
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </div>
      
    </main>
  );
}