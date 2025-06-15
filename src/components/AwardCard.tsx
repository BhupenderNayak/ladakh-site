
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Medal } from "lucide-react";

export interface AwardCardProps {
  image: string;
  title: string;
  description: string;
  year?: number | string;
  link?: string;
  icon?: "award" | "medal";
}

const iconMap = {
  award: Award,
  medal: Medal,
};

const AwardCard: React.FC<AwardCardProps> = ({
  image,
  title,
  description,
  year,
  link,
  icon = "award",
}) => {
  const IconComponent = iconMap[icon];

  return (
    <Card className="shadow-lg bg-offwhite border-2 border-crimson hover:shadow-2xl hover:shadow-saffron/40 transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col overflow-hidden group">
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/95 rounded-full p-2 shadow-lg backdrop-blur-sm">
          <IconComponent className="text-crimson" size={24} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <CardHeader className="pb-2 pt-4">
        <CardTitle className="text-crimson text-xl font-tinos leading-tight">{title}</CardTitle>
        {year && (
          <span className="inline-block bg-saffron text-white rounded-full px-3 py-1 text-sm font-semibold w-fit">
            {year}
          </span>
        )}
      </CardHeader>
      <CardContent className="pt-0 grow flex flex-col">
        <CardDescription className="text-jetblack mb-4 leading-relaxed text-base">
          {description}
        </CardDescription>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center text-saffron font-semibold hover:text-crimson transition-colors duration-200 hover:underline"
          >
            Read more →
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default AwardCard;
