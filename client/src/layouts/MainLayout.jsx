import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      <Header />

      <main>
        {children}
      </main>

      <Footer />

    </div>
  )
}

export default MainLayout