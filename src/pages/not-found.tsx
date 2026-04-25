import { Link } from "wouter";
import { PackageX, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center w-full px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <PackageX className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">404 - Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The packaging supplies you are looking for seem to be out of stock or the link is broken.
          </p>
          <Button asChild size="lg" className="rounded-xl">
            <Link href="/">
              <ArrowLeft className="w-5 h-5 mr-2" /> Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
