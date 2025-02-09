
import Image from "next/image";
import Link from "next/link";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={`px-2 py-1 text-sm font-semibold rounded ${className}`}>
      {children}
    </span>
  );
}

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function OurProduct() {
  const products: Product[] = [
    { id: 1, title: "outclass dresses", price: 20, image: "/image.jpeg", isNew: true },
    { id: 2, title: "outclass dresses", price: 20, originalPrice: 30, image: "/dress2.jpeg", isSale: true },
    { id: 3, title: "outclass dresses", price: 20, image: "/dress3.jpeg" },
    { id: 4, title: "outclass dresses", price: 20, image: "/dress4.jpeg" },
    { id: 5, title: "outclass dresses", price: 20, image: "/dress5.jpeg", isNew: true },
    { id: 6, title: "outclass dresses", price: 20, originalPrice: 30, image: "/black.jpeg", isSale: true },
    { id: 7, title: "outclass dresses", price: 20, image: "/dress.jpeg" },
    { id: 8, title: "outclass dresses", price: 20, image: "/dress2.jpeg" },
    
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-lg bg-white shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
          >
            
            <div className="absolute inset-0 z-10 pointer-events-none animate-shine"></div>

            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.isNew && (
                <Badge className="absolute left-3 top-3 bg-emerald-500 text-white hover:bg-emerald-600">
                  New
                </Badge>
              )}
              {product.isSale && (
                <Badge className="absolute left-1 top-1 bg-orange-500 text-white hover:bg-orange-600">
                  Sale
                </Badge>
              )}
              <Link href={"components/productDectription/discription"}>
                <Image
                  src={product.image}
                  alt={product.title}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
            </div>

            <div className="mt-4 flex items-center justify-between px-4 pb-4">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <button className="rounded-full bg-slate-200 p-2 text-white ">
                
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}