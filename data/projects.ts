import { supabase } from "@/lib/supabaseClient";
import { Project } from "@/types/projects";

const defaultProject = {
  name: "Pharmacy Management System",
  url: "#",
  category:"Web",
  image: "/images/team.webp",
};

export async function getProject(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("id, name, url,category, image_url");

  if (error) {
    console.error("Error fetching team:", error.message);
    return [];
  }

  return (data || []).map((member) => ({
    ...defaultProject,
    id: member.id,
    name: member.name,
    category:member.category || defaultProject.category,
    image: member.image_url || defaultProject.image,
    slug: member.url,
  }));
}
