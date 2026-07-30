import type { ContactItem } from "./contactData";

interface ContactInfoProps {
  item: ContactItem;
}

function ContactInfo({ item }: ContactInfoProps) {
  const Icon = item.icon;

  return (
    <a
      href={item.link}
      className="flex items-center gap-5 rounded-xl border border-gray-800 bg-[#111] p-5 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,.25)]"
    >
      <Icon className="text-2xl text-purple-500" />

      <div>
        <h4 className="font-semibold">{item.title}</h4>

        <p className="text-gray-400">{item.value}</p>
      </div>
    </a>
  );
}

export default ContactInfo;