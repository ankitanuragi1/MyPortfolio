import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import type { Certificate } from "./certificateData";

interface CertificateCardProps {
    certificate: Certificate;
}

function CertificateCard({ certificate }: CertificateCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: .8,
                ease: "easeOut"
            }}
            className="rounded-2xl border border-gray-800 bg-[#111] p-6 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,.35)] transition-all duration-300"
        >

            <FaAward className="text-4xl text-purple-500 mb-5" />

            <h3 className="text-2xl font-bold">
                {certificate.title}
            </h3>

            <p className="mt-2 text-gray-400">
                {certificate.issuer}
            </p>

            <p className="mt-2 text-purple-400">
                {certificate.year}
            </p>

            <a
                href={certificate.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-purple-400 hover:text-purple-300"
            >
                View Certificate
                <FaExternalLinkAlt />
            </a>

        </motion.div>
    );
}

export default CertificateCard;