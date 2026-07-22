from dataclasses import dataclass

@dataclass
class TreeNode:
    value: int
    left: "TreeNode | None" = None
    right: "TreeNode | None" = None



def max_depth(root: TreeNode | None) -> int:
    if root is None:
        return 0

    return 1 + max(
        max_depth(root.left),
        max_depth(root.right)
    )
