
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
  const IconComponent = iconMap[icon] || Award;

  return (
    <Card className="shadow-lg bg-dairycream border-crimson hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="relative w-full aspect-[16/9] rounded-t-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/90 rounded-full p-1 shadow">
          <IconComponent className="text-crimson" size={22} />
        </div>
      </div>
      <CardHeader className="pb-0 pt-2">
        <CardTitle className="text-crimson text-lg font-tinos">{title}</CardTitle>
        {year && <span className="inline-block bg-saffron text-white rounded px-2 py-0.5 text-xs mt-1">{year}</span>}
      </CardHeader>
      <CardContent className="pt-2 grow flex flex-col">
        <CardDescription className="text-jetblack mb-4">{description}</CardDescription>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-saffron font-medium hover:underline"
          >
            Read more
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default AwardCard;

