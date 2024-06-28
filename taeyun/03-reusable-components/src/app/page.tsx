import Chip from "@/components/Chip";

export default function Home() {
  return (
    <div>
      <Chip intent="primary" text="Primary" id="123" />
      <Chip intent="danger" text="Danger" id="234" />
      <Chip intent="secondary" text="Secondary" />
      <Chip intent="warning" text="Warning" />
      <Chip intent="info" text="Info" />
      <Chip intent="default" text="Default" />
    </div>
  );
}
