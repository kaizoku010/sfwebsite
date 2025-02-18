
import { ArrowRight, Sparkles } from "lucide-react";
import { Button, Modal } from "antd"; // Add Modal import
import "./hero.css"
import { Link } from "react-router-dom";
import { useState } from 'react'; // Add useState import

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
Imagine a world where every parent, teacher, and school leader has the tools to unlock the full potential of education.
At Schoolforce, we’re turning this vision into reality by putting critical educational data and AI-powered insights directly into your hands.      </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to={"/features"}>
          <Button type="primary" size="large" className="px-8 h-12 flex items-center">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
          <Button size="large" className="h-12" onClick={() => setIsModalOpen(true)}>
            Watch Demo
          </Button>
        </div>
      </div>

      <Modal
        title="Product Demo"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800}
        centered
      >
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src="https://res.cloudinary.com/dnko3bvt0/video/upload/v1739833178/main_vid_fuwdmg.mp4"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </Modal>
    </section>
  );
};
