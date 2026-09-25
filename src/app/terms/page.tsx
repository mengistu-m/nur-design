export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="prose max-w-none text-muted-foreground">
        <p>This is a placeholder terms of service for Nur Design Construction Consultancy.</p>
        <p>By using our website, you accept these terms and conditions in full.</p>
      </div>
    </div>
  )
}

