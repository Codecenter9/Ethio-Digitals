import { team } from "@/data/team";
import { notFound } from "next/navigation";
import TeamMemberClient from "./TeamMemberClient";

export async function generateStaticParams() {
    return team.map((m) => ({ slug: m.slug }));
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
    const member = team.find((m) => m.slug === params.slug);

    if (!member) return notFound();

    return <TeamMemberClient member={member} />;
}