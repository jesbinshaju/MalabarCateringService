export type MenuItem = {
  id: string;
  name: {
    en: string;
    ml: string;
  };
  description: {
    en: string;
    ml: string;
  };
  category: "breakfast" | "lunch" | "dinner" | "snacks" | "special";
  vegetarian?: boolean;
};

export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: "1",
    name: { en: "Appam with Stew", ml: "അപ്പവും സ്റ്റ്യൂവും" },
    description: {
      en: "Soft, fluffy rice hoppers served with aromatic vegetable or chicken stew",
      ml: "സുഗന്ധമുള്ള പച്ചക്കറി അല്ലെങ്കിൽ ചിക്കൻ സ്റ്റ്യൂവിനൊപ്പം വിളമ്പുന്ന മൃദുവായ അരി അപ്പം",
    },
    category: "breakfast",
  },
  {
    id: "2",
    name: { en: "Puttu & Kadala Curry", ml: "പുട്ടും കടല കറിയും" },
    description: {
      en: "Steamed rice cake layered with coconut, served with spiced black chickpea curry",
      ml: "തേങ്ങ ചേർത്ത് ആവിയിൽ വേവിച്ച അരി കേക്ക്, മസാല ചേർത്ത കടല കറിയോടൊപ്പം",
    },
    category: "breakfast",
    vegetarian: true,
  },
  {
    id: "3",
    name: { en: "Idiyappam", ml: "ഇടിയപ്പം" },
    description: {
      en: "Delicate rice string hoppers paired with coconut milk or egg curry",
      ml: "തേങ്ങാപ്പാലിനൊപ്പമോ മുട്ട കറിയോടൊപ്പമോ വിളമ്പുന്ന നേർത്ത അരി നൂൽപ്പം",
    },
    category: "breakfast",
  },
  {
    id: "4",
    name: { en: "Dosa Varieties", ml: "ദോശ വിഭവങ്ങൾ" },
    description: {
      en: "Crispy fermented crepes - Plain, Masala, Ghee Roast with chutneys and sambar",
      ml: "മൊരിഞ്ഞ പുളിപ്പിച്ച ദോശ - സാദാ, മസാല, നെയ്യ് റോസ്റ്റ് ചട്ണികളും സാമ്പാറും",
    },
    category: "breakfast",
    vegetarian: true,
  },
  {
    id: "5",
    name: { en: "Malabar Parotta", ml: "മലബാർ പൊറോട്ട" },
    description: {
      en: "Layered flatbread with flaky texture, served with beef or vegetable kurma",
      ml: "പാളികളുള്ള ചെറുചൂടുള്ള പൊറോട്ട, ബീഫ് അല്ലെങ്കിൽ വെജിറ്റബിൾ കുറുമയോടൊപ്പം",
    },
    category: "breakfast",
  },

  // Lunch
  {
    id: "6",
    name: { en: "Kerala Sadya", ml: "കേരള സദ്യ" },
    description: {
      en: "Traditional vegetarian feast served on banana leaf with over 20 dishes",
      ml: "വാഴയിലയിൽ 20-ലധികം വിഭവങ്ങളോടെ വിളമ്പുന്ന പാരമ്പര്യ സസ്യാഹാര വിരുന്ന്",
    },
    category: "lunch",
    vegetarian: true,
  },
  {
    id: "7",
    name: { en: "Malabar Biryani", ml: "മലബാർ ബിരിയാണി" },
    description: {
      en: "Fragrant basmati rice layered with tender meat, caramelized onions and aromatic spices",
      ml: "മൃദുവായ മാംസം, കാരമൽ ഉള്ളി, സുഗന്ധ മസാലകൾ എന്നിവയോടെ പാളികളായി വിളമ്പുന്ന സുഗന്ധമുള്ള ബസ്മതി അരി",
    },
    category: "lunch",
  },
  {
    id: "8",
    name: { en: "Fish Curry Meals", ml: "മീൻ കറി മീൽസ്" },
    description: {
      en: "Rice served with tangy fish curry, fish fry, vegetables and accompaniments",
      ml: "പുളിയുള്ള മീൻ കറി, മീൻ ഫ്രൈ, പച്ചക്കറികൾ, കൂട്ടുകറികൾ എന്നിവയോടൊപ്പം ചോറ്",
    },
    category: "lunch",
  },
  {
    id: "9",
    name: { en: "Chicken Curry Meals", ml: "ചിക്കൻ കറി മീൽസ്" },
    description: {
      en: "Steamed rice with authentic Kerala chicken curry, thoran and pickles",
      ml: "ആധികാരിക കേരള ചിക്കൻ കറി, തോരൻ, അച്ചാർ എന്നിവയോടൊപ്പം ആവി ചോറ്",
    },
    category: "lunch",
  },
  {
    id: "10",
    name: { en: "Mutton Curry Meals", ml: "മട്ടൻ കറി മീൽസ്" },
    description: {
      en: "Rich mutton curry slow-cooked with spices, served with rice and sides",
      ml: "മസാലകളോടൊപ്പം സാവധാനം പാകം ചെയ്ത സമ്പന്ന മട്ടൻ കറി, ചോറും സൈഡ് ഡിഷുകളും",
    },
    category: "lunch",
  },

  // Dinner
  {
    id: "11",
    name: { en: "Thalassery Biryani", ml: "തലശ്ശേരി ബിരിയാണി" },
    description: {
      en: "Authentic Thalassery style biryani with short-grain rice and premium meat",
      ml: "ചെറുമണി അരിയും പ്രീമിയം മാംസവും ചേർത്ത ആധികാരിക തലശ്ശേരി സ്റ്റൈൽ ബിരിയാണി",
    },
    category: "dinner",
  },
  {
    id: "12",
    name: { en: "Malabar Prawns Curry", ml: "മലബാർ ചെമ്മീൻ കറി" },
    description: {
      en: "Fresh prawns cooked in coconut milk with traditional Malabar spices",
      ml: "പാരമ്പര്യ മലബാർ മസാലകളോടെ തേങ്ങാപ്പാലിൽ പാകം ചെയ്ത പുതിയ ചെമ്മീൻ",
    },
    category: "dinner",
  },
  {
    id: "13",
    name: { en: "Pathiri & Chicken", ml: "പത്തിരിയും ചിക്കനും" },
    description: {
      en: "Thin rice flatbread served with spicy Malabar chicken curry",
      ml: "എരിവുള്ള മലബാർ ചിക്കൻ കറിയോടൊപ്പം വിളമ്പുന്ന നേർത്ത അരി പത്തിരി",
    },
    category: "dinner",
  },
  {
    id: "14",
    name: { en: "Ghee Rice & Meat", ml: "നെയ്ച്ചോറും മാംസവും" },
    description: {
      en: "Fragrant ghee rice served with choice of meat - mutton, beef or chicken",
      ml: "മട്ടൻ, ബീഫ് അല്ലെങ്കിൽ ചിക്കൻ - ഇഷ്ടമുള്ള മാംസത്തോടൊപ്പം സുഗന്ധമുള്ള നെയ്ച്ചോറ്",
    },
    category: "dinner",
  },
  {
    id: "15",
    name: { en: "Seafood Platter", ml: "സീഫുഡ് പ്ലാറ്റർ" },
    description: {
      en: "Assorted seafood - fish, prawns, squid prepared in Kerala style",
      ml: "വിവിധ കടൽ വിഭവങ്ങൾ - മീൻ, ചെമ്മീൻ, കണവ കേരള രീതിയിൽ തയ്യാറാക്കിയത്",
    },
    category: "dinner",
  },

  // Snacks
  {
    id: "16",
    name: { en: "Banana Fritters", ml: "പഴം പൊരി" },
    description: {
      en: "Ripe banana slices coated in spiced batter and deep fried to perfection",
      ml: "പഴുത്ത നേന്ത്രപ്പഴം മസാല മാവിൽ മുക്കി പൊരിച്ചത്",
    },
    category: "snacks",
    vegetarian: true,
  },
  {
    id: "17",
    name: { en: "Unnakaya", ml: "ഉന്നക്കായ" },
    description: {
      en: "Stuffed banana rolls filled with coconut, cashew and raisins",
      ml: "തേങ്ങ, കശുവണ്ടി, ഉണക്കമുന്തിരി എന്നിവ നിറച്ച നേന്ത്രപ്പഴ റോൾ",
    },
    category: "snacks",
    vegetarian: true,
  },
  {
    id: "18",
    name: { en: "Chicken Cutlet", ml: "ചിക്കൻ കട്ട്‌ലെറ്റ്" },
    description: {
      en: "Crispy breaded chicken patties with aromatic spices",
      ml: "സുഗന്ധ മസാലകളോടെയുള്ള മൊരിഞ്ഞ ബ്രെഡ് പൊതിഞ്ഞ ചിക്കൻ പാറ്റീസ്",
    },
    category: "snacks",
  },
  {
    id: "19",
    name: { en: "Beef Samosa", ml: "ബീഫ് സമോസ" },
    description: {
      en: "Crispy triangular pastry filled with spiced minced beef",
      ml: "മസാല ചേർത്ത അരച്ച ബീഫ് നിറച്ച മൊരിഞ്ഞ ത്രികോണ പേസ്ട്രി",
    },
    category: "snacks",
  },
  {
    id: "20",
    name: { en: "Uzhunnu Vada", ml: "ഉഴുന്ന് വട" },
    description: {
      en: "Crispy lentil donuts seasoned with curry leaves and pepper",
      ml: "കറിവേപ്പിലയും കുരുമുളകും ചേർത്ത മൊരിഞ്ഞ പരിപ്പ് വട",
    },
    category: "snacks",
    vegetarian: true,
  },

  // Special
  {
    id: "21",
    name: { en: "Malabar Dum Biryani", ml: "മലബാർ ദം ബിരിയാണി" },
    description: {
      en: "Premium biryani slow-cooked in sealed pot with saffron and premium spices",
      ml: "കുങ്കുമപ്പൂവും പ്രീമിയം മസാലകളും ചേർത്ത് അടച്ച പാത്രത്തിൽ സാവധാനം പാകം ചെയ്ത പ്രീമിയം ബിരിയാണി",
    },
    category: "special",
  },
  {
    id: "22",
    name: { en: "Meen Pollichathu", ml: "മീൻ പൊള്ളിച്ചത്" },
    description: {
      en: "Pearl spot fish marinated and grilled in banana leaf packet",
      ml: "വാഴയിലയിൽ പൊതിഞ്ഞ് മാരിനേറ്റ് ചെയ്ത് ചുട്ടെടുത്ത കരിമീൻ",
    },
    category: "special",
  },
  {
    id: "23",
    name: { en: "Malabar Kozhi Curry", ml: "മലബാർ കോഴി കറി" },
    description: {
      en: "Signature chicken curry with roasted coconut and special spice blend",
      ml: "വറുത്ത തേങ്ങയും പ്രത്യേക മസാല മിശ്രിതവും ചേർത്ത സിഗ്നേച്ചർ ചിക്കൻ കറി",
    },
    category: "special",
  },
  {
    id: "24",
    name: { en: "Payasam Trio", ml: "പായസം ട്രയോ" },
    description: {
      en: "Three traditional Kerala desserts - Ada Pradhaman, Palada, Semiya Payasam",
      ml: "മൂന്ന് പാരമ്പര്യ കേരള മധുര വിഭവങ്ങൾ - അട പ്രഥമൻ, പാലട, സേമിയ പായസം",
    },
    category: "special",
    vegetarian: true,
  },
  {
    id: "25",
    name: { en: "Live Counter Setup", ml: "ലൈവ് കൗണ്ടർ സെറ്റപ്പ്" },
    description: {
      en: "Interactive cooking stations for biryanis, dosas, and fresh grills",
      ml: "ബിരിയാണി, ദോശ, ഫ്രഷ് ഗ്രിൽ എന്നിവയ്ക്കുള്ള ഇന്ററാക്ടീവ് കുക്കിംഗ് സ്റ്റേഷനുകൾ",
    },
    category: "special",
  },
];

export const menuCategories = ["breakfast", "lunch", "dinner", "snacks", "special"] as const;
export type MenuCategory = (typeof menuCategories)[number];
