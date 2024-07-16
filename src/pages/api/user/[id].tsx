import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  res.status(200).json({
    id: id as string,
    name: "Diego Segura",
    location: "New York, NY",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    description: "writer and designer\nrsvp below\nfollow for event updates",
    potential: 14,
    instagram: "@messybirkin",
    instagram_followers: "128k",
    tiktok: "@messybirkin",
    pics: [
      "http://www.fjobeir.com/wp-content/uploads/2024/07/london.jpg", 
      "http://www.fjobeir.com/wp-content/uploads/2024/07/paris-2.jpg", 
      "http://www.fjobeir.com/wp-content/uploads/2024/07/paris.jpg",
      "http://www.fjobeir.com/wp-content/uploads/2024/07/paris-2.jpg", 
    ],
  });
}
