import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Import screenshots
import ecommerceShot1 from '@/assets/ecommerce-screenshot-1.jpg';
import ecommerceShot2 from '@/assets/ecommerce-screenshot-2.jpg';
import chatShot1 from '@/assets/chat-screenshot-1.jpg';
import chatShot2 from '@/assets/chat-screenshot-2.jpg';
import microservicesShot1 from '@/assets/microservices-screenshot-1.jpg';
import microservicesShot2 from '@/assets/microservices-screenshot-2.jpg';

interface Feature {
  title: string;
  icon: string;
  description: string;
}

interface ProjectDetailData {
  title: string;
  tech: string[];
  description: string;
  image: string;
  features: Feature[];
}

interface ProjectDetailProps {
  projectId: number | null;
  projectDetails: Record<string, ProjectDetailData>;
  onClose: () => void;
}

// Map project IDs to screenshots
const projectScreenshots: Record<string, string[]> = {
  '1': [ecommerceShot1, ecommerceShot2],
  '2': [chatShot1, chatShot2],
  '3': [microservicesShot1, microservicesShot2]
};

export const ProjectDetail = ({ projectId, projectDetails, onClose }: ProjectDetailProps) => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  if (!projectId) return null;

  const detail = projectDetails[projectId.toString()];
  if (!detail) return null;

  const screenshots = projectScreenshots[projectId.toString()] || [];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <>
      <Dialog open={!!projectId} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0 bg-card border-border">
          {/* Header */}
          <div className={`bg-gradient-to-br ${detail.image} p-8 relative`}>
            <div className="absolute inset-0 bg-black/30" />
            <Button
              onClick={onClose}
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">{detail.title}</h2>
              <div className="flex flex-wrap gap-2">
                {detail.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-mono border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Description */}
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {detail.description}
            </p>

            {/* Screenshots Gallery */}
            {screenshots.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Screenshots</h3>
                <div className="relative group">
                  <div 
                    className="relative aspect-video bg-secondary rounded-lg overflow-hidden cursor-pointer border-2 border-border hover:border-primary transition-all"
                    onClick={() => setIsImageModalOpen(true)}
                  >
                    <img
                      src={screenshots[currentScreenshot]}
                      alt={`${detail.title} screenshot ${currentScreenshot + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                        Click to expand
                      </span>
                    </div>
                  </div>

                  {screenshots.length > 1 && (
                    <>
                      <Button
                        onClick={prevScreenshot}
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </Button>
                      <Button
                        onClick={nextScreenshot}
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </Button>
                    </>
                  )}

                  {/* Thumbnail Navigation */}
                  <div className="flex gap-2 mt-4 justify-center">
                    {screenshots.map((screenshot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentScreenshot(idx)}
                        className={`w-20 h-12 rounded border-2 overflow-hidden transition-all ${
                          currentScreenshot === idx ? 'border-primary' : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <img
                          src={screenshot}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Features */}
            <h3 className="text-2xl font-bold mb-6 text-foreground">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {detail.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Full Screen Image Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-0">
          <Button
            onClick={() => setIsImageModalOpen(false)}
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <img
              src={screenshots[currentScreenshot]}
              alt={`${detail.title} screenshot ${currentScreenshot + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            {screenshots.length > 1 && (
              <>
                <Button
                  onClick={prevScreenshot}
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  onClick={nextScreenshot}
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
