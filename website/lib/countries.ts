
export interface Country {
  code: string;
  name: string;
  currencyCode: string;
  currencySymbol: string;
}

export const countries: Country[] = [
  { code: "PK", name: "Pakistan", currencyCode: "PKR", currencySymbol: "Rs" },
  { code: "IN", name: "India", currencyCode: "INR", currencySymbol: "₹" },
  { code: "US", name: "United States", currencyCode: "USD", currencySymbol: "$" },
  { code: "GB", name: "United Kingdom", currencyCode: "GBP", currencySymbol: "£" },
  { code: "AE", name: "United Arab Emirates", currencyCode: "AED", currencySymbol: "د.إ" },
  { code: "SA", name: "Saudi Arabia", currencyCode: "SAR", currencySymbol: "﷼" },
  { code: "BD", name: "Bangladesh", currencyCode: "BDT", currencySymbol: "৳" },
  { code: "AF", name: "Afghanistan", currencyCode: "AFN", currencySymbol: "؋" },
  { code: "CA", name: "Canada", currencyCode: "CAD", currencySymbol: "C$" },
  { code: "AU", name: "Australia", currencyCode: "AUD", currencySymbol: "A$" },
  { code: "TR", name: "Turkey", currencyCode: "TRY", currencySymbol: "₺" },
  { code: "CN", name: "China", currencyCode: "CNY", currencySymbol: "¥" },
  { code: "JP", name: "Japan", currencyCode: "JPY", currencySymbol: "¥" },
  { code: "KR", name: "South Korea", currencyCode: "KRW", currencySymbol: "₩" },
  { code: "MY", name: "Malaysia", currencyCode: "MYR", currencySymbol: "RM" },
  { code: "ID", name: "Indonesia", currencyCode: "IDR", currencySymbol: "Rp" },
  { code: "SG", name: "Singapore", currencyCode: "SGD", currencySymbol: "S$" },
  { code: "TH", name: "Thailand", currencyCode: "THB", currencySymbol: "฿" },
  { code: "LK", name: "Sri Lanka", currencyCode: "LKR", currencySymbol: "Rs" },
  { code: "NP", name: "Nepal", currencyCode: "NPR", currencySymbol: "Rs" },
  { code: "DE", name: "Germany", currencyCode: "EUR", currencySymbol: "€" },
  { code: "FR", name: "France", currencyCode: "EUR", currencySymbol: "€" },
  { code: "IT", name: "Italy", currencyCode: "EUR", currencySymbol: "€" },
  { code: "ES", name: "Spain", currencyCode: "EUR", currencySymbol: "€" },
  { code: "NL", name: "Netherlands", currencyCode: "EUR", currencySymbol: "€" },
  { code: "BR", name: "Brazil", currencyCode: "BRL", currencySymbol: "R$" },
  { code: "MX", name: "Mexico", currencyCode: "MXN", currencySymbol: "$" },
  { code: "ZA", name: "South Africa", currencyCode: "ZAR", currencySymbol: "R" },
  { code: "NG", name: "Nigeria", currencyCode: "NGN", currencySymbol: "₦" },
  { code: "EG", name: "Egypt", currencyCode: "EGP", currencySymbol: "£" }
];

export const getCountryByCode = (code: string) => {
  return countries.find(
    (country) => country.code === code
  );
};
