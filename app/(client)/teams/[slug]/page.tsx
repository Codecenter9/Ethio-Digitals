// app/(pages)/teams/[slug]/page.tsx
import { notFound } from "next/navigation";
import TeamMemberClient from "./TeamMemberClient";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
    );
}

export async function generateStaticParams() {
    const supabase = getSupabase();

    const { data: team, error } = await supabase.from("teams").select("name");

    if (error || !team) return [];

    return team.map((member) => ({
        slug: member.name.toLowerCase().replace(/\s+/g, "-"),
    }));
}

export default async function TeamMemberPage({ params }: { params: { slug: string } }) {
    const supabase = getSupabase();

    const { data: team, error } = await supabase
        .from("teams")
        .select("id, name,role, profession,address,experience,projects, profile_url, details, email, phone");

    if (error || !team) return notFound();

    const member = team.find(
        (m) => m.name.toLowerCase().replace(/\s+/g, "-") === params.slug
    );

    if (!member) return notFound();

    const mappedMember = {
        id: member.id,
        name: member.name,
        address: member.address,
        role: member.role,
        position: member.profession,
        bio: member.details,
        image: member.profile_url,
        email: member.email,
        phone: member.phone,
        socials: {
            github: "#",
            linkedin: "#",
            twitter: "#",
            portfolio: "#",
        },
        skills: [],
        projects: member.projects,
        experience: member.experience,
        joined: "N/A",
        slug: member.name.toLowerCase().replace(/\s+/g, "-"),
    };

    return <TeamMemberClient member={mappedMember} />;
}
