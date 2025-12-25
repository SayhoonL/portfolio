import os
from rest_framework.decorators import api_view
from rest_framework.response import Response
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@api_view(["POST"])
def chat_view(request):
    user_message = request.data.get("message")

    if not user_message:
        return Response({"error": "Message is required"}, status=400)

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": (
                    "You are an assistant that answers questions about "
                    "Sayhoon Lee's portfolio, projects, skills, and experience. "
                    "Keep responses short and professional."
                ),
            },
            {"role": "user", "content": user_message},
        ],
        max_tokens=150,
    )

    reply = response.choices[0].message.content

    return Response({"reply": reply})
