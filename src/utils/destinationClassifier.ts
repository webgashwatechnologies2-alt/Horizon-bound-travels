import menu_data from "@/data/MenuData";

/**
 * Checks if a given destination identifier or slug is an international destination
 * based on the existing menu structure and classification in MenuData.ts.
 */
export const isInternationalDestination = (destination?: string): boolean => {
  if (!destination) return false;
  
  const normalized = destination.toLowerCase().trim();
  
  const internationalMenu = menu_data.find(
    (item) => item.title.toLowerCase() === "international"
  );
  
  if (!internationalMenu || !internationalMenu.sub_menus) {
    return false;
  }
  
  return internationalMenu.sub_menus.some((sub) => {
    const subLink = sub.link.toLowerCase();
    const subTitle = sub.title.toLowerCase();
    return (
      subLink.includes(`/destinations/${normalized}`) ||
      subTitle === normalized ||
      normalized.includes(subTitle) ||
      subTitle.includes(normalized)
    );
  });
};

/**
 * Returns formatted display name for a destination slug
 */
export const getDestinationDisplayName = (destination?: string): string => {
  if (!destination) return "";
  const normalized = destination.toLowerCase().trim();
  
  const internationalMenu = menu_data.find(
    (item) => item.title.toLowerCase() === "international"
  );
  
  const found = internationalMenu?.sub_menus?.find(
    (sub) => sub.link.toLowerCase().includes(`/destinations/${normalized}`)
  );
  
  if (found) return found.title;
  
  return destination.charAt(0).toUpperCase() + destination.slice(1);
};
