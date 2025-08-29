import Link from 'next/link';

export default function Custom404() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="text-center">
              <div className="h-96 flex items-center justify-center mb-8" style={{ 
                backgroundImage: `url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)`, 
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}>
                <h1 className="text-8xl font-bold text-[#fca311]">404</h1>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-4xl font-bold text-slate-800">Look like you're lost</h3>
                <p className="text-lg text-slate-600">The page you are looking for is not available!</p>
                <Link href="/" className="inline-block bg-[#fca311] hover:bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 mt-6">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
