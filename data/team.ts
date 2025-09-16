import { supabase } from "@/lib/supabaseClient";

export type TeamMember = {
  id: string;
  name: string;
  role:string;
  address:string;
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
  experience?: number;
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
  experience: 0,
  location: "Ethiopia",
  joined: "N/A",
  bio: "",
  image: "/images/team.webp",
};


// Fetch and merge
export async function getTeam(): Promise<TeamMember[]> {
  const { data, error } = await supabase
    .from("teams")
    .select("id, name, profession,address,experience,projects, details, profile_url, email, phone,role");

  if (error) {
    console.error("Error fetching team:", error.message);
    return [];
  }

  return (data || []).map((member) => ({
    ...defaultTeam,
    id: member.id,
    name: member.name,
    address:member.address,
    position: member.profession,
    bio: member.details,
    image: member.profile_url || defaultTeam.image,
    email: member.email,
    phone: member.phone,
    role:member.role,
    experience:member.experience,
    projects:member.projects,
    slug: member.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}
