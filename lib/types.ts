export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export interface Technician {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  reviewCount: number;
  location: string;
}

export interface Service {
  id: string;
  title: string;
  categoryId: string;
  categoryName: string;
  image: string;
  startingPrice: number;
  rating: number;
  reviewCount: number;
  technician: Technician;
}

export interface ServiceFilters {
  search?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sort?: "popular" | "price_low" | "price_high" | "rating";
}





type IUser = {
    success: boolean,
    message: string,
    data: {
        profile: {
            id: string,
            name: string,
            email: string,
            activeStatus: string,
            role: string,
            createdAt: string,
            updatedAt: string,
            profile: {
                id: string,
                profilePhoto: string,
                bio: string | null,
                userId: string,
                createdAt: string,
                updatedAt: string
            }
        }
    }
}



export type NavbarProps = {
    user: IUser
}


export interface Technician {
  id: string;
  name: string;
  city: string;
  profileImage: string;
  averageRating: string;
  totalReviews: number;
}

export interface ServiceDetail {
  name: string;
  description: string;
  category: string;
}

export interface Service {
  id: string;
  price: string;
  pricingType: "FIXED" | "HOURLY";
  estimatedDuration: number;
  serviceImage: string;
  service: ServiceDetail;
  technician: Technician;
}

export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export interface ServiceFilters {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sort?: "popular" | "price_low" | "price_high" | "rating";
}