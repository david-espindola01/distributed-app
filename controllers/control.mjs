export const calculateBMI = (weight, height) => {
    if (height <= 0) throw new Error("La altura debe ser mayor que 0");
    return (weight / (height * height)).toFixed(2);
};

export const recommendDiet = (bmi, gender) => {
    gender = gender?.toLowerCase();
    if (!gender) return "Género no especificado, usa una dieta equilibrada.";

    if (bmi < 18.5) {
        return gender === "male"
            ? "Dieta alta en calorías con proteínas, carnes y carbohidratos."
            : "Dieta alta en calorías con proteínas, frutas y frutos secos.";
    }
    if (bmi < 24.9) {
        return gender === "male"
            ? "Dieta equilibrada con proteínas y verduras."
            : "Dieta equilibrada con proteínas, frutas y cereales.";
    }
    if (bmi < 29.9) {
        return gender === "male"
            ? "Dieta baja en carbohidratos y aumento de fibra."
            : "Dieta baja en grasas con porciones controladas.";
    }
    return gender === "male"
        ? "Dieta estricta con control calórico y ejercicios de fuerza."
        : "Dieta estricta con control calórico y ejercicios cardiovasculares.";
};

export const handleBMICalculation = (req, res) => {
    try {
        const { weight, height, gender } = req.body;

        if (!weight || !height || !gender) {
            return res.status(400).json({ error: "Peso, altura y género son requeridos" });
        }

        const bmi = calculateBMI(weight, height);
        const diet = recommendDiet(parseFloat(bmi), gender);

        res.json({ bmi, gender, diet });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
