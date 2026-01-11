// maintenance.js
const MAINTENANCE_MODE = false; // 🔥 true = bật | false = tắt

if (MAINTENANCE_MODE) {
    document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bảo trì</title>
    <style>
        html, body {
            margin: 0;
            height: 100%;
            background:
                radial-gradient(circle at top, rgba(120,120,255,.15), transparent 60%),
                linear-gradient(180deg, #020617, #000);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: system-ui, sans-serif;
        }
        .box {
            text-align: center;
            padding: 32px 28px;
            max-width: 320px;
            border-radius: 20px;
            background: rgba(0,0,0,.6);
            box-shadow: 0 0 40px rgba(0,0,0,.8);
            color: #fff;
        }
        h1 {
            margin: 0 0 12px;
            font-size: 22px;
            font-weight: 900;
        }
        p {
            margin: 0;
            font-size: 14px;
            opacity: .85;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="box">
        <h1>⚠️ Hệ Thống Bảo Trì⚠️</h1>
        <p>
                            <p>Hiện tại hệ thống đang trong quá trình bảo trì để nâng cấp và cải thiện dịch vụ. Vui lòng quay lại sau. Xin lỗi vì sự bất tiện này xin cảm ơn !</p>

        </p>
    </div>
</body>
</html>
    `;

    throw new Error("Maintenance Mode Enabled");
}
