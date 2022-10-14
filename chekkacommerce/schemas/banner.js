export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "logoImage",
      title: "LogoImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bannerImage",
      title: "BannerImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
      name: "contactNumber",
      title: "ContactNumber",
      type: "string",
    },
  ],
};
