import { auth } from "@clerk/nextjs";
import { getPastesByUserId } from "../../../prisma/prismacont";
import Card from "@/components/card";

export default async function Dashboard() {
  const user = auth();
  let data;

  if (user) {
    data = await getPastesByUserId(user.userId);
    if (data.length <= 0) {
      data = [
        {
          id: "abc123", // Example ID generated using cuid() function
          title: "Add new paste by clicking add button",
          content: "This is an example paste content.",
          visibility: "PUBLIC",
          expiration: "2024-04-30T12:00:00Z", // Example expiration date
          createdAt: "2024-03-27T08:00:00Z", // Example creation date
          updatedAt: "2024-03-27T08:00:00Z", // Example last update date
          userId: "user123", // Example user ID
        },
      ];
    }
  }

  return (
    <div className="flex justify-between">
      <div>
        {data?.map((datae, index) => (
          <Card key={index} data={datae} />
        ))}
      </div>
      <div className="flex items-top">
        <button className="btn btn-outline btn-primary">Add</button>
      </div>
    </div>
  );
}
