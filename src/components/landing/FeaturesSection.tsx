
import { BookOpen, Brain, ChartBar, Users, FileText, Bell } from "lucide-react";
import { Card } from "antd";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Real-time analytics for student performance and institutional growth",
  },
  {
    icon: FileText,
    title: "Exam Management",
    description: "Create, manage, and grade exams with automated assessment tools",
  },
  {
    icon: ChartBar,
    title: "Performance Tracking",
    description: "Real-time monitoring of academic progress with automated reports",
  },
  {
    icon: Users,
    title: "Stakeholder Portal",
    description: "Dedicated interfaces for teachers, students, parents, and administrators",
  },
  {
    icon: Bell,
    title: "Automated Reporting",
    description: "Instant performance updates and notifications for parents",
  },
  {
    icon: BookOpen,
    title: "Resource Management",
    description: "Efficient allocation and tracking of educational resources",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="section-padding bg-[#f0f2f5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 heading-gradient">
          Transformative Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
              bordered={false}
            >
              <div className="h-12 w-12 bg-[#e6f7ff] rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-[#1890ff]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
