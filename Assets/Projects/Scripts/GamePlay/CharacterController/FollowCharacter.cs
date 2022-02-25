using System;
using UnityEngine;

namespace Projects.Scripts.GamePlay.CharacterController
{
    public class FollowCharacter : MonoBehaviour
    {
        [SerializeField] private Transform followTransform;
        [SerializeField] private Vector2 offset;

        private void Update()
        {
            transform.position = followTransform.position + (Vector3) offset;
            transform.eulerAngles = Vector3.zero;
            
        }
    }
}