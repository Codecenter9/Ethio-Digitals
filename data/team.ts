import { supabase } from "@/lib/supabaseClient";

export type TeamMember = {
  id: string;
  name: string;
  slug: string;
  position: string;
  image: string;
  bio: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
  skills?: string[];
  projects?: number;
  experience?: string;
  location?: string;
  joined?: string;
  email?: string;
  phone?: string;
};

const defaultTeam = {
  socials: {
    github: "#",
    linkedin: "#",
    twitter: "#",
    portfolio: "#",
  },
  skills: [],
  projects: 0,
  experience: "N/A",
  location: "Ethiopia",
  joined: "N/A",
  bio: "",
  image: "/images/team.webp",
};


// Fetch and merge
export async function getTeam(): Promise<TeamMember[]> {
  const { data, error } = await supabase
    .from("teams")
    .select("id, name, profession, details, profile_url, email, phone");

  if (error) {
    console.error("Error fetching team:", error.message);
    return [];
  }

  return (data || []).map((member) => ({
    ...defaultTeam,
    id: member.id,
    name: member.name,
    position: member.profession,
    bio: member.details,
    image: member.profile_url || defaultTeam.image,
    email: member.email,
    phone: member.phone,
    slug: member.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}
