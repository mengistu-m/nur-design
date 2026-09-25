export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="prose max-w-none text-muted-foreground">
        <p>This is a placeholder privacy policy for Nur Design Construction Consultancy.</p>
        <p>We respect your privacy and are committed to protecting your personal data.</p>
      </div>
    </div>
  )
}

