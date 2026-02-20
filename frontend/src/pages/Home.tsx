import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      
      {/* Use existing Navbar component */}
      <Navbar isLoggedIn={false} />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-green-200 text-green-800 rounded-full text-sm font-semibold mb-6">
            AI-Powered Language Learning
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Master Any Language with
            <br />
            <span className="text-green-600">Personalized AI</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Learn at your own pace with AI-powered lessons tailored to your skill level. 
            From beginner to advanced, Orato adapts to your learning journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Link
              to="/signup"
              className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/signin"
              className="px-8 py-4 border-2 border-gray-400 text-gray-700 rounded-xl font-bold text-lg hover:border-green-600 hover:text-green-600 transition"
            >
              Sign In
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-green-600">10K+</div>
              <div className="text-gray-600 mt-2">Active Learners</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-green-600">15+</div>
              <div className="text-gray-600 mt-2">Languages</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-green-600">4.9</div>
              <div className="text-gray-600 mt-2">User Rating</div>
            </div>
          </div>

        </div>
      </div>

      {/* Use existing Footer component */}
      <Footer />

    </div>
  );
};

export default Home;