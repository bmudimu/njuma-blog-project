// components/cards/ProjectCard.tsx
import Image from "next/image";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  href?: string;
  tags?: string[];
};

export default function ProjectCard({
  title,
  image,
  description,
  href,
  tags = [],
}: ProjectCardProps) {
  return (
    <Card href={href} className="overflow-hidden p-0">
      {/* Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-h4 font-semibold mb-2">{title}</h3>
        <p className="font-body text-small text-slate-400 mb-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[color:rgb(0_0_0/0.05)] dark:bg-[color:rgb(255_255_255/0.08)] px-2 py-0.5 text-xs text-slate-500"
            >
              {t}
            </span>
          ))}
        </div>

        {href && (
          <Button as="link" href={href} variant="secondary" size="sm">
            View Details
          </Button>
        )}
      </div>
    </Card>
  );
}
