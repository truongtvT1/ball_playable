using UnityEngine;

public class CameraFollower : MonoBehaviour
{
    public Transform target;
    public float maxY;
    private void FixedUpdate()
    {
        var pos = target.transform.position;
        var nextPosition = new Vector3(pos.x + 1.0f, pos.y + 1.0f,transform.position.z);
        if (nextPosition.y > maxY)
            nextPosition.y = maxY;
        transform.position = Vector3.Lerp(transform.position, nextPosition, Time.fixedDeltaTime * 10f);
    }
}
