import { useEffect, useState } from "react";
import { type User } from "~/types/user";
import Chip from "./Chip";
import Image from "next/image";
import Icon from "./Icon";
import Link from "next/link";

export default function Card() {
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    location: "",
    avatar: "",
    description: "",
    potential: 0,
    instagram: "",
    instagram_followers: "",
    tiktok: "",
    pics: [],
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("/api/user/1");
        const data: User = (await response.json()) as User;
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    void getUser();
  }, []);

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg bg-primary bg-opacity-40">
      {/* Card info */}
      <div className="flex flex-wrap items-start gap-4 p-4 md:flex-nowrap md:pe-0">
        <Image
          src={user.avatar}
          alt={user.name}
          width={96}
          height={96}
          className="h-14 w-14 rounded-full"
        />
        {/* Use Info */}
        <div className="flex w-full flex-col gap-3">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center md:flex-col md:items-start xl:flex-row xl:items-center">
            {/* Name */}
            <div>
              <h2 className="text-lg">{user.name}</h2>
              <p className="text-sm text-zinc-400">{user.location}</p>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-1 text-sm">
              <Chip color="primary" className="flex items-center gap-1">
                <Icon name="instagram" className="h-4 w-4" />
                <Link
                  target="_blank"
                  title={user.name}
                  href={`https://instagram.com/${user.instagram.replace("@", "")}`}
                >
                  {user.instagram}
                </Link>
                <span className="mx-1">|</span>
                <span className="font-semibold uppercase">
                  {user?.instagram_followers}
                </span>
              </Chip>
              <Chip color="primary" className="flex items-center gap-1">
                <Icon name="tiktok" className="h-4 w-4" />
                <Link
                  target="_blank"
                  title={user.name}
                  href={`https://tiktok.com/${user.tiktok}`}
                >
                  {user.instagram}
                </Link>
              </Chip>
            </div>
          </div>
          <p
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{
              __html: user.description.replace(/\n/g, "<br />"),
            }}
          />

          <div className="flex items-center gap-2">
            <h3 className="font-semibold">High Potential</h3>
            <span>|</span>
            <Link
              href={`https://www.google.com`}
              className="text-xs text-zinc-400 underline"
            >
              View Application
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2.5 w-2.5 rotate-45 bg-green-600 ${index >= user.potential && "bg-opacity-40"}`}
                />
              ))}
            </div>
            <Chip color="white" className="text-sm">
              Customer
            </Chip>
          </div>
        </div>
        {/* Gallery */}
        <div className="flex w-full flex-nowrap gap-1 overflow-auto md:ms-5">
          {(user.pics ?? []).map((pic, index) => (
            <Image
              key={index}
              src={pic}
              alt={user.name}
              width={180}
              height={200}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
      {/* Card actions */}
      <div className="flex flex-col justify-between gap-3 bg-primary p-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <Chip color="success" className="flex items-center gap-2 text-sm">
            <span>Accept</span>
            <Icon name="accept" className="h-4 w-4" />
          </Chip>
          <Chip color="error" className="flex items-center gap-2 text-sm">
            <span>Reject</span>
            <Icon name="reject" className="h-4 w-4" />
          </Chip>
          <Chip color="neutral" className="flex items-center gap-2 text-sm">
            <span>Source: Direct</span>
          </Chip>
        </div>

        <div className="flex items-center gap-1">
          <Chip color="warning" className="text-sm">
            Overdue
          </Chip>
          <span className="text-xs text-zinc-400">Applied 04/08/2024</span>
        </div>
      </div>
    </div>
  );
}
