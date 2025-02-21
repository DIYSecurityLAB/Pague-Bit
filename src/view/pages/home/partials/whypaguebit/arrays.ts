import { Handshake, Clock, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import bitcoin1 from "../../../../assets/Design sem nome (3).png";
import bitcoin2 from "../../../../assets/Design sem nome (4).png";
import bitcoin4 from "../../../../assets/Design sem nome (6).png";

export const useReasons = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      Icon: Handshake,
      title: t("whyPagueBit.reasons.1.title"),
      description: t("whyPagueBit.reasons.1.description"),
      image: bitcoin1,
      alt: t("whyPagueBit.reasons.1.alt"),
    },
    {
      id: 2,
      Icon: Clock,
      title: t("whyPagueBit.reasons.2.title"),
      description: t("whyPagueBit.reasons.2.description"),
      image: bitcoin2,
      alt: t("whyPagueBit.reasons.2.alt"),
    },
    {
      id: 3,
      Icon: Shield,
      title: t("whyPagueBit.reasons.3.title"),
      description: t("whyPagueBit.reasons.3.description"),
      image: bitcoin4,
      alt: t("whyPagueBit.reasons.3.alt"),
    },
  ];
};
