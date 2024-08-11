import s from "./statusCardStyle.module.scss";

interface StatsCardProps {
  title: string;
  quantity: number;
}

export const StatusCard: React.FC<StatsCardProps> = ({ title, quantity }) => {
  return (
    <article className={s.container}>
      <h2>{title}</h2>
      <span>{quantity}</span>
    </article>
  );
};
