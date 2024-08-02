import { useCallback, useMemo, useState } from "react";

interface MemoizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
  const [showValues, setShowValues] = useState(true);

  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, incomes) => {
      console.log("Calculando receita...");
      return (total += incomes);
    });
  }, [financialData.incomes]);

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcomes) => {
      console.log("calculando o total de despesas");
      return (total += outcomes);
    });
  }, [financialData.outcomes]);

  const aplicarDesconto = useCallback(
    (desconto: number) => {
      return totalOutcomes * (1 - desconto);
    },
    [totalOutcomes]
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Memoization</h1>
      <h2>UseMemo</h2>
      <p>{`Total de receitas R$${showValues ? totalIncomes : " XXX"}`}</p>
      <br />
      <p>{`Total de despesas R$${showValues ? totalOutcomes : " XXX"}`}</p>

      <br />
      <br />
      <button
        onClick={() => {
          setShowValues(!showValues);
        }}
      >
        {showValues ? "Ocultar Valores" : "Mostrar Valores"}
      </button>
      <br />
      <br />
    </div>
  );
};
