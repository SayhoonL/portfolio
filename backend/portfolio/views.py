import os
from rest_framework.decorators import api_view
from rest_framework.response import Response
from openai import OpenAI

from .models import Project
from .serializers import ProjectSerializer
from .context import PORTFOLIO_CONTEXT 


# ============================
# Projects API
# ============================
@api_view(["GET"])
def project_list(request):
    projects = Project.objects.all().order_by("-created_at")
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


# ============================
# ChatGPT API
# ============================
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@api_view(["POST"])
def chat_view(request):
    user_message = request.data.get("message", "").strip()

    if not user_message:
        return Response({"error": "Message is required"}, status=400)

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": PORTFOLIO_CONTEXT, 
                },
                {
                    "role": "user",
                    "content": user_message,
                },
            ],
            max_tokens=200,
        )

        reply = response.choices[0].message.content
        return Response({"reply": reply})

    except Exception as e:
        return Response(
            {"error": "Failed to generate response"},
            status=500,
        )
