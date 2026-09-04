import menu_data from "@/data/MenuData";
import destination_data from "@/data/DestinationData";
import { isInternationalDestination } from "./destinationClassifier";

export interface SearchSuggestion {
  id: string;
  title: string;
  subtitle: string;
  type: "domestic" | "international" | "package";
  badge: string;
  link: string;
  category?: string;
}

// Popular aliases / sub-locations mapped to destination slugs
const DESTINATION_ALIASES: Record<string, { slug: string; name: string; type: "domestic" | "international" }> = {
  // Domestic
  manali: { slug: "himachal", name: "Manali, Himachal", type: "domestic" },
  shimla: { slug: "himachal", name: "Shimla, Himachal", type: "domestic" },
  kullu: { slug: "himachal", name: "Kullu, Himachal", type: "domestic" },
  dharamshala: { slug: "himachal", name: "Dharamshala, Himachal", type: "domestic" },
  dalhousie: { slug: "himachal", name: "Dalhousie, Himachal", type: "domestic" },
  kaza: { slug: "spiti", name: "Kaza, Spiti", type: "domestic" },
  chandratal: { slug: "spiti", name: "Chandratal, Spiti", type: "domestic" },
  ladakh: { slug: "leh", name: "Leh-Ladakh", type: "domestic" },
  leh: { slug: "leh", name: "Leh", type: "domestic" },
  pangong: { slug: "leh", name: "Pangong, Ladakh", type: "domestic" },
  srinagar: { slug: "kashmir", name: "Srinagar, Kashmir", type: "domestic" },
  gulmarg: { slug: "kashmir", name: "Gulmarg, Kashmir", type: "domestic" },
  pahalgam: { slug: "kashmir", name: "Pahalgam, Kashmir", type: "domestic" },
  rishikesh: { slug: "uttarakhand", name: "Rishikesh, Uttarakhand", type: "domestic" },
  haridwar: { slug: "uttarakhand", name: "Haridwar, Uttarakhand", type: "domestic" },
  nainital: { slug: "uttarakhand", name: "Nainital, Uttarakhand", type: "domestic" },
  mussoorie: { slug: "uttarakhand", name: "Mussoorie, Uttarakhand", type: "domestic" },
  jaipur: { slug: "rajasthan", name: "Jaipur, Rajasthan", type: "domestic" },
  udaipur: { slug: "rajasthan", name: "Udaipur, Rajasthan", type: "domestic" },
  jodhpur: { slug: "rajasthan", name: "Jodhpur, Rajasthan", type: "domestic" },
  jaisalmer: { slug: "rajasthan", name: "Jaisalmer, Rajasthan", type: "domestic" },
  munnar: { slug: "kerala", name: "Munnar, Kerala", type: "domestic" },
  alleppey: { slug: "kerala", name: "Alleppey, Kerala", type: "domestic" },
  kochi: { slug: "kerala", name: "Kochi, Kerala", type: "domestic" },
  calangute: { slug: "goa", name: "North Goa", type: "domestic" },

  // International
  dubai: { slug: "dubai", name: "Dubai, UAE", type: "international" },
  bali: { slug: "bali", name: "Bali, Indonesia", type: "international" },
  ubud: { slug: "bali", name: "Ubud, Bali", type: "international" },
  thailand: { slug: "thailand", name: "Thailand", type: "international" },
  bangkok: { slug: "thailand", name: "Bangkok, Thailand", type: "international" },
  phuket: { slug: "thailand", name: "Phuket, Thailand", type: "international" },
  pattaya: { slug: "thailand", name: "Pattaya, Thailand", type: "international" },
  singapore: { slug: "singapore", name: "Singapore", type: "international" },
  sentosa: { slug: "singapore", name: "Sentosa, Singapore", type: "international" },
  maldives: { slug: "maldives", name: "Maldives", type: "international" },
  male: { slug: "maldives", name: "Malé, Maldives", type: "international" },
  vietnam: { slug: "vietnam", name: "Vietnam", type: "international" },
  hanoi: { slug: "vietnam", name: "Hanoi, Vietnam", type: "international" },
  halong: { slug: "vietnam", name: "Halong Bay, Vietnam", type: "international" },
  "hong kong": { slug: "hong-kong", name: "Hong Kong", type: "international" },
  hongkong: { slug: "hong-kong", name: "Hong Kong", type: "international" },
  malaysia: { slug: "malaysia", name: "Malaysia", type: "international" },
  "kuala lumpur": { slug: "malaysia", name: "Kuala Lumpur, Malaysia", type: "international" },
  mauritius: { slug: "mauritius", name: "Mauritius", type: "international" },
  europe: { slug: "europe", name: "Europe", type: "international" },
  paris: { slug: "europe", name: "Paris, Europe", type: "international" },
  switzerland: { slug: "europe", name: "Switzerland, Europe", type: "international" },
};

/**
 * Returns default destination suggestions (both Domestic and International)
 */
export const getDefaultDestinations = (): SearchSuggestion[] => {
  const suggestions: SearchSuggestion[] = [];

  // Domestic destinations from MenuData
  const domesticMenu = menu_data.find((m) => m.title.toLowerCase() === "domestic");
  if (domesticMenu && domesticMenu.sub_menus) {
    domesticMenu.sub_menus.forEach((sub) => {
      suggestions.push({
        id: `dest-${sub.link}`,
        title: sub.title,
        subtitle: "Domestic Destination",
        type: "domestic",
        badge: "Domestic",
        link: sub.link,
      });
    });
  }

  // International destinations from MenuData
  const internationalMenu = menu_data.find((m) => m.title.toLowerCase() === "international");
  if (internationalMenu && internationalMenu.sub_menus) {
    internationalMenu.sub_menus.forEach((sub) => {
      suggestions.push({
        id: `dest-${sub.link}`,
        title: sub.title,
        subtitle: "International Destination",
        type: "international",
        badge: "International",
        link: sub.link,
      });
    });
  }

  return suggestions;
};

/**
 * Searches destinations and packages across both Domestic and International
 */
export const searchDestinationsAndPackages = (query: string): SearchSuggestion[] => {
  if (!query || !query.trim()) {
    return getDefaultDestinations();
  }

  const q = query.toLowerCase().trim();
  const results: SearchSuggestion[] = [];
  const addedLinks = new Set<string>();

  // 1. Check Primary Destinations (Domestic & International)
  const allDestinations = getDefaultDestinations();
  allDestinations.forEach((dest) => {
    if (dest.title.toLowerCase().includes(q)) {
      results.push(dest);
      addedLinks.add(dest.link);
    }
  });

  // 2. Check Aliases / Cities (e.g. "Manali", "Shimla", "Dubai", "Bali", "Bangkok")
  Object.entries(DESTINATION_ALIASES).forEach(([alias, info]) => {
    if (alias.includes(q) || q.includes(alias)) {
      const destLink = `/destinations/${info.slug}`;
      if (!addedLinks.has(destLink)) {
        results.push({
          id: `alias-${info.slug}`,
          title: info.name,
          subtitle: `${info.type === "international" ? "International" : "Domestic"} Destination`,
          type: info.type,
          badge: info.type === "international" ? "International" : "Domestic",
          link: destLink,
        });
        addedLinks.add(destLink);
      }
    }
  });

  // 3. Check Tour Packages (both domestic and international)
  destination_data.forEach((pkg) => {
    const titleMatch = pkg.title.toLowerCase().includes(q);
    const locationMatch = pkg.location.toLowerCase().includes(q);
    const destMatch = pkg.destination.toLowerCase().includes(q);

    if (titleMatch || locationMatch || destMatch) {
      const pkgLink = `/tour-details/${pkg.id}`;
      if (!addedLinks.has(pkgLink)) {
        const isIntl = isInternationalDestination(pkg.destination);
        results.push({
          id: `pkg-${pkg.id}`,
          title: pkg.title,
          subtitle: `${pkg.time} • ${pkg.price}`,
          type: "package",
          badge: isIntl ? "International Tour" : "Domestic Tour",
          link: pkgLink,
        });
        addedLinks.add(pkgLink);
      }
    }
  });

  // Return top 12 most relevant results
  return results.slice(0, 12);
};

/**
 * Resolves the best destination or package URL for a query
 */
export const getBestSearchUrl = (query: string): string => {
  if (!query || !query.trim()) return "/tour-grid-1";
  const results = searchDestinationsAndPackages(query);
  if (results.length > 0) {
    return results[0].link;
  }
  return `/tour-grid-1`;
};
