
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "antd";
import "./hero.css"
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section  className="vid_bg section-padding min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ff] to-transparent -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(24,144,255,0.15),transparent)] -z-10" />
      
      <div className="max-w-4xl mx-auto animate-fadeIn">
        <div className="inline-flex items-center gap-2 bg-[white] px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-[#1890ff]" />
          <span className="text-sm font-medium text-[#1890ff]">AI-Powered School Management System</span>
        </div>
        
        <h1 style={{color:"white"}} className=" greet text-4xl md:text-6xl font-bold mb-6 heading-gradient">
          Welcome to<br/> <span className="greet-span"> Schoolforce</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto">
          Empower your educational institution with AI-driven insights, exam management, and automated reporting for students, teachers, and parents.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to={"/features"}>
          <Button type="primary" size="large" className="px-8 h-12 flex items-center">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
          <Button size="large" className="h-12">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
