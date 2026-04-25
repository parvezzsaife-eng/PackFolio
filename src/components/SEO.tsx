import { Helmet } from "react-helmet-async";
import { config } from "@/config";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  children?: React.ReactNode;
}

export function SEO({ 
  title = `${config.COMPANY_NAME} | ${config.COMPANY_TAGLINE}`, 
  description = "Premium B2B packaging supplier in Meerut. High-quality corrugated boxes, courier bags, thermal rolls, and bubble mailers for Amazon, Flipkart & Meesho sellers.",
  path = "",
  children 
}: SEOProps) {
  const url = `https://packfolio.in${path}`; // Replace with actual domain
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
      {children}
    </Helmet>
  );
}
